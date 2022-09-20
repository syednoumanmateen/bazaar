import { Component, OnInit } from '@angular/core';

declare const window: any
declare const document: any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  desktop: boolean;
  market: Array<any>;
  advantages: Array<any>;
  advantagesFromSK: Array<any>;
  listed: Array<any>;

  constructor() {
    this.desktop = this.isDesktop();
    this.market = this.getMarket();
    this.advantages = this.getAdvantages();
    this.advantagesFromSK = this.getAdvantagesFromSK();
    this.listed = this.getListed();
  }

  ngOnInit(): void {
    if (localStorage.getItem('_lng') != '1') {
      try {
        document.getElementById('sk-google-lang-modal').style.display = "block";
      } catch (e) {

      }
    }
  }

  isDesktop() {
    return window.innerWidth >= 1025 ? true : false
  }

  getMarket() {
    return [
      {
        icon: './assets/images/market/sell.svg',
        title: 'SELL'
      },
      {
        icon: './assets/images/market/buy.svg',
        title: 'BUY'
      },
      {
        icon: './assets/images/market/jobs.svg',
        title: 'JOBS'
      },
      {
        icon: './assets/images/market/rent.svg',
        title: 'RENT'
      },
      {
        icon: './assets/images/market/services.svg',
        title: 'SERVICES'
      }
    ]
  }

  getAdvantages() {
    return [
      { text: 'Connecting Buyer to Seller & Service Provider to Service Seeker with the trusted Retailer Channel.' },
      { text: 'Cater to existing demand & Create & cater the new demand through SK Bazaar.' },
      { text: 'Become a technology enabled Market Place at your own village' },
      { text: 'Clear, Transparent & Secure Channel for Payments & Logistics.' }
    ]
  }

  getAdvantagesFromSK() {
    return [
      { text: 'Technology, Marketing & Payments to ensure that the Listing gets maximum reach.' },
      { text: 'Over 1000+ Listings available & 50,000 Plus Kiranas associated for a maximum impact.' },
      { text: 'Seller can connect to Buyer, Bargain & Close the deal all at one place.' }
    ]
  }

  getListed() {
    return [
      {
        icon: './assets/images/list/farm_equipment_vehicle.svg',
        title: 'Farm Equipment/Vehicle'
      },
      {
        icon: './assets/images/list/fertilizer_&_seeds.svg',
        title: 'Fertilizer & Seeds'
      },
      {
        icon: './assets/images/list/farm_to_table(crops).svg',
        title: 'Farm to Table(Crops)'
      },
      {
        icon: './assets/images/list/animals_live_stock.svg',
        title: 'Animals/Live Stock'
      }
    ]
  }

  changeLanguage() {
    try {
      document.getElementById('sk-google-lang-modal').style.display = "block";
    } catch (e) {

    }
  }
}
