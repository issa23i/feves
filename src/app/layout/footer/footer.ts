import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AccessibilityWidgetService } from '../../shared/accessibility-widget/accessibility-widget.service';
import { federations } from '../../shared/rpvs.data';

@Component({
  selector: 'app-footer',
  imports: [RouterLink],
  templateUrl: './footer.html',
  styleUrl: './footer.scss',
})
export class Footer {
  protected readonly federations = federations;
  protected readonly logoPath = 'assets/Slogo.svg';
  protected readonly siteUrl = 'https://rpvs.org/';
  protected readonly encodedSiteUrl = encodeURIComponent(this.siteUrl);
  protected readonly encodedSiteTitle = encodeURIComponent('RPVS - Confederación Provincial Red Vecinal de Sevilla');
  protected readonly encodedSiteShareText = encodeURIComponent(
    'RPVS - Confederación Provincial Red Vecinal de Sevilla\n\nTrabajando por una provincia más participativa, justa y conectada a través del movimiento vecinal.',
  );

  constructor(private readonly accessibilityWidget: AccessibilityWidgetService) {}

  protected openAccessibilityPanel(): void {
    this.accessibilityWidget.openPanel();
  }
}
