import { Component } from '@angular/core';

@Component({
  selector: 'app-ceav-callout',
  imports: [],
  template: `
    <aside class="ceav-callout">
      <a class="ceav-callout__link" href="/federaciones">
        <img src="assets/Slogo.svg" alt="RPVS" />
        <div>
          <h3>Coordinación vecinal provincial</h3>
          <p>
            RPVS suma a Federación Nazarena, Federación UTER y FEVES para reforzar una voz vecinal común en Sevilla.
          </p>
        </div>
      </a>
    </aside>
  `,
})
export class CeavCallout {}
