import { async, TestBed, ComponentFixture } from '@angular/core/testing';
import { IonicModule } from 'ionic-angular';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import {} from 'jasmine';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

describe('MyApp Component', () => {

let appComponent.component:MyApp;
let fixture: ComponentFixture<MyApp>;

beforeEach(async(() => {
    TestBed.configureTestingModule({
    declarations: [MyApp],
    imports: [
        IonicModule.forRoot(MyApp)
    ],
    providers: [
        StatusBar,
        SplashScreen
    ]
    })
}));

beforeEach(() => {
    fixture = TestBed.createComponent(MyApp);
    appComponent = fixture.componentInstance;
});

it ('should be created', () => {
    expect(fixture).toBeTruthy();
    expect(appComponent).toBeTruthy();
    expect(appComponent instanceof MyApp).toBe(true);
});

it ('should app initialise with a root page of HomePage', () => {
    appComponent.ngOnInit();
    expect(appComponent['rootPage']).toBe(HomePage);
});

});