import { Component, OnInit, Inject } from '@angular/core';

import { NGXLogger } from "ngx-logger";

import { ModuleSubject } from "../program-details/program-details.subject";

@Component({
  selector: 'program-summary',
  templateUrl: './program-summary.component.html',
  styleUrls: ['./program-summary.component.scss']
})
export class ProgramSummaryComponent implements OnInit {

  constructor(private _logger : NGXLogger, private _moduleSubject : ModuleSubject) { }

  ngOnInit() {
    this._logger.info('module subject in program summary ----->'+JSON.stringify(this._moduleSubject.getdata()));
  }

}
