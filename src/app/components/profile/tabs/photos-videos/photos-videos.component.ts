import { Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { ProfileService } from '../../profile.service';

@Component({
    selector     : 'profile-photos-videos',
    templateUrl  : './photos-videos.component.html',
    styleUrls    : ['./photos-videos.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class ProfilePhotosVideosComponent implements OnInit, OnDestroy
{
    photosVideos: any;

    // Private
    private _unsubscribeAll: Subject<any>;

    /**
     * Constructor
     *
     * @param {ProfileService} _profileService
     */
    constructor(
        private _profileService: ProfileService
    )
    {
        // Set the private defaults
        this._unsubscribeAll = new Subject();
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Lifecycle hooks
    // -----------------------------------------------------------------------------------------------------

    /**
     * On init
     */
    ngOnInit(): void
    {
        this._profileService.photosVideosOnChanged
            .pipe(takeUntil(this._unsubscribeAll))
            .subscribe(photosVideos => {
                this.photosVideos = photosVideos;
            });
    }

    /**
     * On destroy
     */
    ngOnDestroy(): void
    {
        // Unsubscribe from all subscriptions
        this._unsubscribeAll.next();
        this._unsubscribeAll.complete();
    }
}
