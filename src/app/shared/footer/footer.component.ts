import { Component } from '@angular/core';
import { menuFooter } from './data/itemsFoooter.interface';
import { socialItem } from './socialitems/interface/socialitem.interface';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {

  title: string = "Astra Games";

  getDate = (): number => {
    return new Date().getFullYear();
  }

  items: menuFooter[] = [
    {
      id: 1,
      name: "Acerca de Astra Games",
      icon: "bi bi-joystick",
      url: "/about"
    },
    {
      id: 2,
      name: "Soporte",
      icon: "bi bi-headset",
      url: "/support"
    },
    {
      id: 3,
      name: "Comunidad",
      icon: "bi bi-people-fill",
      url: "/community"
    },
    {
      id: 4,
      name: "Tienda",
      icon: "bi bi-bag-fill",
      url: "/shop"
    },
  ];


  itemsSocial: socialItem[] = 
  [
    {
      id: 1,
      name: "Faceboook",
      url: "",
      icon: "bi bi-facebook",
    },
    {
      id: 2,
      name: "Twitter",
      url: "",
      icon: "bi bi-twitter-x",
    },
    {
      id: 3,
      name: "Instagram",
      url: "",
      icon: "bi bi-instagram",
    },
  ]

}
