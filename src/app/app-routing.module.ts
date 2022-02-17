import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { DetresolveservService } from './services/detresolveserv.service';
import { RepdataresolverService } from './services/repdataresolver.service';
import { ResolveservService } from './services/resolveserv.service';

const routes: Routes = [
 {
    path: '',
    redirectTo: 'splash-screen',
    pathMatch: 'full'
  },
  {
    path: 'search',
    loadChildren: () => import('./pages/search/search.module').then( m => m.SearchPageModule)
  },
  {
    path: 'recpie-mnue/:id',
    resolve:{
      special: ResolveservService
    },
    loadChildren: () => import('./pages/recpie-mnue/recpie-mnue.module').then( m => m.RecpieMnuePageModule)
  },
  {
    path: 'details/:idd',
    resolve:{
      special: DetresolveservService
    },
    loadChildren: () => import('./pages/details/details.module').then( m => m.DetailsPageModule)
  },
  {
    path: 'splash-screen',
    loadChildren: () => import('./pages/splash-screen/splash-screen.module').then( m => m.SplashScreenPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'logout',
    loadChildren: () => import('./pages/logout/logout.module').then( m => m.LogoutPageModule)
  },
  {
    path: 'logup',
    loadChildren: () => import('./pages/logup/logup.module').then( m => m.LogupPageModule)
  },
  {
    path: 'uploadedrecp',
    loadChildren: () => import('./pages/uploadedrecp/uploadedrecp.module').then( m => m.UploadedrecpPageModule)
  },
  {
    path: 'show-files',
    loadChildren: () => import('./pages/show-files/show-files.module').then( m => m.ShowFilesPageModule)
  },
  {
    path: 'bar-code-scanner',
    loadChildren: () => import('./pages/bar-code-scanner/bar-code-scanner.module').then( m => m.BarCodeScannerPageModule)
  },
  {
    path: 'repiesvideos',
    loadChildren: () => import('./pages/repiesvideos/repiesvideos.module').then( m => m.RepiesvideosPageModule)
  },
  {
    path: 'account-setting',
    loadChildren: () => import('./pages/account-setting/account-setting.module').then( m => m.AccountSettingPageModule)
  },
  {
    path: 'recpies-videos/:iddd',
    resolve:{
      special:RepdataresolverService
    },
    loadChildren: () => import('./pages/recpies-videos/recpies-videos.module').then( m => m.RecpiesVideosPageModule)
  },
  {
    path: 'change-password',
    loadChildren: () => import('./pages/change-password/change-password.module').then( m => m.ChangePasswordPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
