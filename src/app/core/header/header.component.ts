import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { MatIconRegistry} from '@angular/material';
import { DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Output()toggle = new EventEmitter<void>();
  @Output()toggleTheme = new EventEmitter<boolean>();

  constructor(matIconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
    // matIconRegistry.addSvgIcon('c_more', sanitizer.bypassSecurityTrustResourceUrl('assets/arrow down.svg'));
  }

  ngOnInit() {
  }

  openSidebar() {
    this.toggle.emit();
  }

  onchange(event) {
    console.log(  event.checked);
    this.toggleTheme.emit(event.checked);
  }

}
