/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Project } from './types';
import { PROJECTS } from './data/projects';
import { CustomCursor } from './components/CustomCursor';
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { Intro } from './components/Intro';
import { Services } from './components/Services';
import { Projects } from './components/Projects';
import { About } from './components/About';
import { Technologies } from './components/Technologies';
import { Process } from './components/Process';
import { Capabilities } from './components/Capabilities';
import { FAQ } from './components/FAQ';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ProjectDetailModal } from './components/ProjectDetailModal';
import { ProjectInquiryModal } from './components/ProjectInquiryModal';

export default function App() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [inquiryModalOpen, setInquiryModalOpen] = useState(false);

  // Sync with URL hash for projects if present
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash.startsWith('#project-')) {
        const slug = hash.replace('#project-', '');
        const matched = PROJECTS.find((p) => p.slug === slug);
        if (matched) {
          setSelectedProject(matched);
        }
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleOpenProject = (project: Project) => {
    setSelectedProject(project);
    window.location.hash = `#project-${project.slug}`;
  };

  const handleCloseProject = () => {
    setSelectedProject(null);
    if (window.location.hash.startsWith('#project-')) {
      history.pushState('', document.title, window.location.pathname + window.location.search);
    }
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 70;
      const elementPos = element.getBoundingClientRect().top;
      const offsetPos = elementPos + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPos,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="min-h-screen bg-[#EBE9E4] text-[#000000] selection:bg-[#0000EE] selection:text-white relative">
      {/* Custom Desktop Cursor */}
      <CustomCursor />

      {/* Navigation Header */}
      <Navigation
        onNavigate={scrollToSection}
        onOpenContact={() => setInquiryModalOpen(true)}
        currentView={selectedProject ? 'project' : 'home'}
        onBackToHome={handleCloseProject}
      />

      {/* Main Page Flow */}
      <main>
        {/* Hero Section */}
        <Hero
          onViewProjects={() => scrollToSection('work')}
          onOpenContact={() => setInquiryModalOpen(true)}
        />

        {/* Positioning Intro Statement */}
        <Intro />

        {/* Services - What I Build */}
        <Services />

        {/* Selected Work Projects */}
        <Projects onSelectProject={handleOpenProject} />

        {/* About Mahendra */}
        <About />

        {/* Technology Ecosystem */}
        <Technologies />

        {/* Process Methodology */}
        <Process />

        {/* Capabilities Statements */}
        <Capabilities />

        {/* FAQ Accordion */}
        <FAQ />

        {/* Contact & Final CTA */}
        <Contact onOpenInquiry={() => setInquiryModalOpen(true)} />
      </main>

      {/* Minimal Footer */}
      <Footer onNavigate={scrollToSection} />

      {/* Full-Screen Project Detail Modal / View */}
      {selectedProject && (
        <ProjectDetailModal
          project={selectedProject}
          onClose={handleCloseProject}
          onSelectProject={handleOpenProject}
        />
      )}

      {/* Project Inquiry Modal */}
      <ProjectInquiryModal
        isOpen={inquiryModalOpen}
        onClose={() => setInquiryModalOpen(false)}
      />
    </div>
  );
}

