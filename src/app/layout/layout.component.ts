import { ChangeDetectionStrategy, Component, computed } from '@angular/core';
import { environment } from '../../environments/environment';
import { RouterLink, RouterOutlet } from '@angular/router';
import { ContactsPageCreateFormComponent } from '../pages/contacts/components';

@Component({
  selector: 'layout',
  imports: [RouterOutlet, RouterLink], 
  templateUrl: './layout.component.html',
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LayoutComponent {
  appName = computed<string>(() => environment.appName);
}

export default LayoutComponent;
