import { Component, OnInit } from '@angular/core';
import { OddService } from '../odd.service';
import { TicketService } from '../ticket.service';
import * as _ from "lodash";

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss'],
  providers: [OddService, TicketService]
})
export class BoardComponent implements OnInit {
  odds;
  betChoosen: any[] = [];
  leagueId = {
    id: 0
  }
  leagues;

  constructor(private odd: OddService, private tick: TicketService) { }

  ngOnInit() {
    this.odd.getLeagues()
      .subscribe((leagues) => {
        this.leagues = leagues;
      });
  }

  addOdd(choose) {
    let values = this.betChoosen.map(function(o) { return (o.teamChoose === choose.teamChoose) ? true : false ; });
    if (values[0]) {
      this.betChoosen.splice(this.betChoosen.indexOf(choose.teamChoose, 1));
    } else {
      this.betChoosen.push(choose);
    }
    this.betChoosen = _.clone(this.betChoosen);
  }

  getSportsOdd(elem) {
    this.odd.getOdds(elem)
    .subscribe((odds) => {
      this.odds = odds;
    });
  }
}
