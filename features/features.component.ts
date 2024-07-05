import { Component } from '@angular/core';
import { UiModuleModule } from '../../ui-module/ui-module.module';
@Component({
  selector: 'app-features',
  standalone: true,
  imports: [UiModuleModule, ],
  templateUrl: './features.component.html',
  styleUrl: './features.component.css',
})
export class FeaturesComponent {
  value!: string;
}
