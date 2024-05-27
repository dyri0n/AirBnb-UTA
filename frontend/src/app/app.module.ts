import {importProvidersFrom, NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HousingVisualizerComponent} from "../components/housing-visualizer/housing-visualizer.component";
import {ImageCardComponent} from "../components/housing-visualizer/images-card/image-card.component";
import {
    HousingInfoDisplayerComponent
} from "../components/housing-visualizer/housing-info-displayer/housing-info-displayer.component";
import {HomeStayListComponent} from "../components/home-stay-list/home-stay-list.component";
import {HomeTypeButtonsComponent} from "../components/home-stay-list/home-type-buttons/home-type-buttons.component";
import {AdvancedFilterComponent} from "../components/home-stay-list/advanced-filter/advanced-filter.component";
import {FormsModule} from "@angular/forms";
import {HomeStayFinderComponent} from "../components/home-stay-list/home-stay-finder/home-stay-finder.component";
import {NavbarComponent} from "../components/navbar/navbar.component";
import {AddHomeStayComponent} from "../components/add-home-stay/add-home-stay.component";
import {HttpClientModule, provideHttpClient} from "@angular/common/http";
import {EditHomeStayComponent} from "../components/edit-home-stay/edit-home-stay.component";
import {NgOptimizedImage} from "@angular/common";

@NgModule({
  declarations: [
    AppComponent,
    HousingVisualizerComponent,
    ImageCardComponent,
    HousingInfoDisplayerComponent,
    HomeStayListComponent,
    HomeTypeButtonsComponent,
    AdvancedFilterComponent,
    HomeStayFinderComponent,
    NavbarComponent,
    AddHomeStayComponent,
    EditHomeStayComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgOptimizedImage
  ],
  providers: [
    provideHttpClient()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
