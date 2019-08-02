import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sponsors',
  templateUrl: './sponsors.component.html',
  styleUrls: ['./sponsors.component.scss']
})
export class SponsorsComponent implements OnInit {

  sponsors = [
    {
      'name': 'Berkey Filters',
      'url': 'https://www.berkeywater.com/',
      'imgUrl': '../../assets/img/sponsors/sponsor_berkey.jpg',
      'scale': '75',
      'active': true
    },
    {
      'name': 'Grand Canyon Trust',
      'url': 'http://www.grandcanyontrust.org/',
      'imgUrl': '../../assets/img/sponsors/sponsor_grandcanyontrust.jpg',
      'scale': '75',
      'active': true
    },
    {
      'name': 'Injiji',
      'url': 'http://www.injiji.com/',
      'imgUrl': '../../assets/img/sponsors/sponsor_injinji.jpg',
      'scale': '75',
      'active': true
    },
    {
      'name': 'Ginger People',
      'url': 'http://www.gingerpeople.com/',
      'imgUrl': '../../assets/img/sponsors/sponsor_gingerpeople.jpg',
      'scale': '75',
      'active': true
    },
    {
      'name': 'Luna Sandals',
      'url': 'http://www.lunasandals.com/',
      'imgUrl': '../../assets/img/sponsors/sponsor_luna.png',
      'scale': '75',
      'active': true
    },
    {
      'name': 'Theo Chocolates',
      'url': 'https://theochocolate.com',
      'imgUrl': '../../assets/img/sponsors/sponsor_theo.png',
      'scale': '75',
      'active': true
    },
    {
      'name': 'Clif Bar',
      'url': 'http://www.clifbar.com/',
      'imgUrl': '../../assets/img/sponsors/sponsor_clifbar.jpg',
      'scale': '75',
      'active': true
    },
    {
      'name': 'Vita Coco',
      'url': 'http://www.vitacoco.com/',
      'imgUrl': '../../assets/img/sponsors/sponsor_vitacoco.jpg',
      'scale': '75',
      'active': true
    },
    {
      'name': 'Lundberg',
      'url': 'http://www.lundberg.com/',
      'imgUrl': '../../assets/img/sponsors/sponsor_lundberg.png',
      'scale': '75',
      'active': true
    },
    {
      'name': 'Road Id',
      'url': 'http://www.roadid.com/',
      'imgUrl': '../../assets/img/sponsors/sponsor_roadid.gif',
      'scale': '75',
      'active': true
    },
    {
      'name': 'Real Salt',
      'url': 'http://www.realsalt.com/',
      'imgUrl': '../../assets/img/sponsors/sponsor_realsalt.gif',
      'scale': '75',
      'active': true
    },
    {
      'name': 'Trail Runner Mag',
      'url': 'http://www.trailrunnermag.com/',
      'imgUrl': '../../assets/img/sponsors/sponsor_trailrunnermag.jpg',
      'scale': '75',
      'active': true
    },
    {
      'name': 'Dr Tungs',
      'url': 'http://www.drtungs.com/',
      'imgUrl': '../../assets/img/sponsors/sponsor_drtung.jpg',
      'scale': '75',
      'active': true
    },

    {
      'name': 'Edwards & Sons',
      'url': 'http://www.edwardandsons.com/',
      'imgUrl': '../../assets/img/sponsors/sponsor_edwardsandsons.png',
      'scale': '75',
      'active': true
    },
    {
      'name': 'California Baby',
      'url': 'http://www.californiababy.com/',
      'imgUrl': '../../assets/img/sponsors/sponsor_californiababy.jpg',
      'scale': '75',
      'active': true
    },
    {
      'name': 'Chinook Seedery',
      'url': 'http://www.chinookseedery.com/',
      'imgUrl': '../../assets/img/sponsors/sponsor_chinookseedery.jpg',
      'scale': '75',
      'active': true
    }

  ];

  constructor() {
    this.sponsors = this.sponsors.filter((element) => {
      return element.active === true;
    });
  }

  ngOnInit() {
  }

}
