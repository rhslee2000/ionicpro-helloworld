import { async, ComponentFixture } from '@angular/core/testing';
import { TestUtils } from '../../../test';
import { VibeComponent } from './vibe.component';
import { VibeFormComponent } from './vibe-form/vibe-form.component';

describe('VibeComponent', () => {
  let instance: VibeComponent;
  let fixture: ComponentFixture<VibeComponent> = null ;

  beforeEach(async(() => TestUtils.beforeEachCompiler([VibeComponent, VibeFormComponent]).then(compiled => {
    fixture = compiled.fixture;
    instance = compiled.instance;
  })));

  it('should create component', async(() => {
    expect(instance).toBeTruthy();
  }));
});
