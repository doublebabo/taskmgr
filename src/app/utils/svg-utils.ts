import { MatIconRegistry} from '@angular/material';
import { DomSanitizer} from '@angular/platform-browser';

export const loadSvgResources = (ir: MatIconRegistry, ds: DomSanitizer) => {
  ir.addSvgIcon('c_more', ds.bypassSecurityTrustResourceUrl('assets/arrow down.svg'));
}
