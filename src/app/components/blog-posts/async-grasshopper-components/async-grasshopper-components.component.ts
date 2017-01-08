import { Component, OnInit, Input } from '@angular/core';
declare let hljs: any;
@Component({
  selector: 'app-async-grasshopper-components',
  templateUrl: './async-grasshopper-components.component.html',
  styleUrls: ['./async-grasshopper-components.component.css']
})
export class GrasshopperComponent implements OnInit {
  @Input() isSummary: boolean;
  codeSample: string;
  constructor() { }

  ngOnInit() {
    this.codeSample = `
        Polyline resultPolyline;
        bool skipSolution;
        bool componentBusy;

        protected override void SolveInstance(IGH_DataAccess DA)
        {
            if (skipSolution)
            {
                skipSolution = false;
                DA.IncrementIteration();
                DA.SetData(0, resultPolyline);
                Grasshopper.Instances.RedrawAll();
            }
            else if (!componentBusy)
            {
                DA.DisableGapLogic();
                
                Brep BBox = null;
                if (!DA.GetData(0, ref BBox)) return;

                someComputingEngine = new SomeComputingEngine();

                Task<Polyline> computingTask = new Task<Polyline>(() => someComputingEngine.GenerateThePath(BBox));
                computingTask.ContinueWith(r =>
                {
                    if (r.Status == TaskStatus.RanToCompletion)
                    {
                        Polyline pln = computingTask.Result;
                        if (pln != null)
                        {
                            NickName = "Task Finished!";
                            skipSolution = true;
                            resultPolyline = pln;
                            ExpireSolution(false);
                            Grasshopper.Instances.ActiveCanvas.Document.NewSolution(false);
                        }
                        else
                        {
                            NickName = "Task Failed.";
                            Grasshopper.Instances.RedrawAll();
                        }
                        componentBusy = false;
                    }
                    else if (r.Status == TaskStatus.Faulted)
                    {
                        NickName = "Task Failed.";
                        Grasshopper.Instances.RedrawAll();
                        componentBusy = false;
                    }
                },
                TaskScheduler.FromCurrentSynchronizationContext());
                computingTask.Start();
                NickName = "Processing...";
                Grasshopper.Instances.RedrawAll();
                componentBusy = true;
            }
        }
    `
    // this.codeSample = hljs.highlightBlock("foreach(var x in caca){}")
  }

}
