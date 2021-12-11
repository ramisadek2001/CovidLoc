import { NgModule } from "@angular/core";
import { StatsComponent } from "./stats/stats.component";
import { AlertsComponent } from "./alerts/alerts.component";
@NgModule({
    declarations:[StatsComponent,AlertsComponent],
    exports: [StatsComponent,AlertsComponent],
})

export class ComponentsModule {
    
}