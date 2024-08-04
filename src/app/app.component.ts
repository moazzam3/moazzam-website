import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { EducationComponent } from './education/education.component';
import { SkillsComponent } from './skills/skills.component';
import { AboutComponent } from './about/about.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { ExperienceComponent } from './experience/experience.component';
import { ProfilesComponent } from './profiles/profiles.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, EducationComponent, SkillsComponent, AboutComponent, WelcomeComponent, ExperienceComponent, ProfilesComponent, PortfolioComponent, ContactComponent, FooterComponent, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'my-website';
}
