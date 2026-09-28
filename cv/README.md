# Duo Zhang CV

Edit `Duo_Zhang_CV.tex`. It is self-contained and opens in the built-in LaTeX
editor without additional project files. The original ZIP's `resume.cls` is
retained for reference; the current document does not depend on it.

The published output is `../assets/pdf/Duo_Zhang_CV.pdf`. The site's CV navigation
opens that PDF directly; `/cv/` provides a download page. The CV source folder and
the original root-level `Duo_Zhang_CV.zip` are excluded from the Jekyll output.

To export with an installed TeX distribution, run from the repository root:

```sh
mkdir -p /tmp/duo-cv-build
pdflatex -interaction=nonstopmode -halt-on-error -output-directory=/tmp/duo-cv-build cv/Duo_Zhang_CV.tex
pdflatex -interaction=nonstopmode -halt-on-error -output-directory=/tmp/duo-cv-build cv/Duo_Zhang_CV.tex
cp /tmp/duo-cv-build/Duo_Zhang_CV.pdf assets/pdf/Duo_Zhang_CV.pdf
```

## Content sources and status (September 28, 2026)

- Education, earlier appointments, National Scholarship, and phone: original CV ZIP.
- Organization: Education, Publications and Preprints, one chronological Research
  Experience section, and Teaching Experience. Peer-reviewed work is listed before
  preprints and manuscripts. Rutgers contributions are grouped into three research
  themes; numbered internal links connect research bullets to their papers.
- Research interests, the full honors list, skills, and the VAE/LSGAN project are
  omitted. The National Scholarship appears as one line under Education; the
  original ZIP retains the omitted material.
- Rutgers candidacy, adviser, email, and teaching: `_pages/about.md`, `_config.yml`,
  and `_pages/teaching.md`.
- [dRVG](https://arxiv.org/abs/2609.31412) and
  [ST-pRRTC](https://arxiv.org/abs/2609.30533): titles, author order, and research
  descriptions checked against their arXiv records. Both are labeled preprints.
- [SDAR](https://arxiv.org/abs/2512.08206) and
  [RVG](https://arxiv.org/abs/2409.03920): arXiv records and existing site entries.
  ICRA 2026 and 2025 status follows the existing acceptance announcements.
- FAVOR: title, authors, and description checked against the latest manuscript
  on the lab machine at
  `Kinematics_Dynamics_Model/docs/Kinodynamic_Planning_for_Floating_Robot_Arm__Duo_/_main.tex`.
  The title is *Efficient Bézier Velocity Optimization for Free-Floating Space
  Manipulators*. Its status is “Manuscript”; no public URL is asserted.
- The older T-RO paper uses the title and complete author list from the site's
  bibliography and supplied PDF, including Chen Liang. The RA-L issue year, 2022,
  follows the original CV; the website bibliography now also uses 2022 rather
  than its 2021 acceptance year.

When FAVOR is public, update both the manuscript entry in `Duo_Zhang_CV.tex` and
`zhang2026favor` in `../_bibliography/papers.bib`. Add verified arXiv/PDF/project
links and a thumbnail as available, and remove the coming-soon text. Do not use
dummy URLs. Conference acceptance should be updated only when confirmed.
