import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ProfileComponent } from './profile.component';
import { ProfileService } from './profile.service';
import { ProfileAboutComponent } from './tabs/about/about.component';
import { ProfilePhotosVideosComponent } from './tabs/photos-videos/photos-videos.component';
import { ProfileTimelineComponent } from './tabs/timeline/timeline.component';
import { MaterialModule } from 'src/app/material.module';
import { CommonModule } from '@angular/common';


const routes = [
    {
        path     : '',
        component: ProfileComponent,
        resolve  : {
            profile: ProfileService
        }
    }
];

@NgModule({
    declarations: [
        ProfileComponent,
        ProfileTimelineComponent,
        ProfileAboutComponent,
        ProfilePhotosVideosComponent
    ],
    imports     : [
        RouterModule.forChild(routes),
        MaterialModule,
        CommonModule
    ],
    providers   : [
        ProfileService
    ]
})
export class ProfileModule
{
}