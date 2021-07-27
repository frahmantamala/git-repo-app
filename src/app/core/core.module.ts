import { NgModule, Optional, SkipSelf } from '@angular/core';
import { GithubService } from './github.service';
import { HttpClientModule } from '@angular/common/http';
import { UtilsService } from './utils.service';
import { UserProfileService } from './user-profile.service';



@NgModule({
  declarations: [],
  imports: [
    HttpClientModule
  ],
  exports: [],
  providers: [
    GithubService,
    UtilsService,
    UserProfileService
  ]
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    this.throwIfAlreadyLoaded(parentModule, 'CoreModule');
  }

  throwIfAlreadyLoaded(parentModule: any, moduleName: string): void {
    if (parentModule) {
      throw new Error(`${moduleName} has already been loaded. Import Core modules in the AppModule only.`);
    }
  }
}
