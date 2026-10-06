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

## Content sources and status (October 6, 2026)

- Education, earlier appointments, National Scholarship, and phone: original CV ZIP.
- Organization for research/R&D internship applications: a short research profile,
  Education, chronological Research Experience, Publications and Preprints, and
  Teaching Experience. Page one contains Rutgers, Tencent, and NYU research.
  Peer-reviewed work is listed before preprints. Rutgers contributions remain
  grouped into four directions: RVG/dRVG, SDAR, ST-pRRTC, and FAVOR; numbered
  internal links connect them to their papers. SDAR emphasizes task structure and
  synchronous dual-arm planning; GPU acceleration is explicit in ST-pRRTC.
- The contact line includes Website, GitHub, and Google Scholar. Research
  Experience flows without a forced page break or continuation header; automatic
  space reservation keeps appointment headings with their descriptions.
- The full honors list, generic skills section, and VAE/LSGAN project are omitted.
  The National Scholarship appears as one line under Education. No expected Ph.D.
  graduation date was found in the CV, site biography, or structured résumé data,
  so none is stated. The original ZIP retains omitted background material.
- Rutgers candidacy, adviser, email, and teaching: `_pages/about.md`, `_config.yml`,
  and `_pages/teaching.md`.
- [dRVG](https://arxiv.org/abs/2609.31412) and
  [ST-pRRTC](https://arxiv.org/abs/2609.30533): titles, author order, and research
  descriptions checked against their arXiv records. Both are labeled preprints.
- [SDAR](https://arxiv.org/abs/2512.08206) and
  [RVG](https://arxiv.org/abs/2409.03920): arXiv records and existing site entries.
  ICRA 2026 and 2025 status follows the existing acceptance announcements.
- [FAVOR](https://arxiv.org/abs/2609.31880): title, author order, and description
  checked against the public arXiv record.
  The title is *Efficient Bézier Velocity Optimization for Free-Floating Space
  Manipulators*. It is labeled an arXiv preprint, with working abstract and PDF
  links in the website bibliography and an arXiv link in the CV.
- The older T-RO paper uses the title and complete author list from the site's
  bibliography and supplied PDF, including Chen Liang. The RA-L issue year, 2022,
  follows the original CV; the website bibliography now also uses 2022 rather
  than its 2021 acceptance year.

When FAVOR's project page is public, add its verified URL to
`zhang2026favor` in `../_bibliography/papers.bib`. Do not use dummy URLs.
Conference acceptance should be updated only when confirmed.

## Research-claim checks for the R&D revision

- **SDAR: 100% end-to-end success on evaluated rearrangement tasks in simulation.**
  Verified in `../assets/pdf/dual_arm_2026.pdf`, the abstract and evaluation around
  Fig. 10, and [the arXiv paper, Sec. V-B](https://arxiv.org/html/2512.08206v2#S5.SS2).
  This is a benchmark result, not a general guarantee or hardware success rate.
  Dual UR5e validation is supported separately by Sec. V-D.
- **FAVOR: 99.8% point-to-point success and 1.78 s mean computation.**
  Verified in [arXiv v2, Table II and Sec. VI-A](https://arxiv.org/html/2609.31880v2).
  The source reports 624/625 successes and 1.779 s, including failures and timeouts;
  only the time is rounded in the CV. The seven-DoF arm and five simulated
  spacecraft models are retained as evaluation context. These are simulation
  results, not real-spacecraft experiments. The concise CV sentence reports mean
  computation without implying a successful-trials-only average; the full timing
  definition remains documented here.
- **RVG theory and title:** the first page of `../assets/pdf/RVG.pdf` and
  [arXiv v3](https://arxiv.org/abs/2409.03920) support resolution completeness and
  asymptotic optimality, and the canonical title *Asymptotically-Optimal Multi-Query
  Path Planning for a Polygonal Robot*. The project page's visible title, document
  title, social metadata, and README now agree with the CV and bibliography.
- **dRVG:** [the public paper](https://arxiv.org/abs/2609.31412) supports graph
  merging, quadtree-guided exploration, and microMVP demonstrations. The CV's
  optimality statement explicitly refers to RVG; it does not extend that claim to
  dRVG. dRVG's completeness result depends on the stated sensing and geometric
  assumptions and is relative to full-map RVG at the same angular resolution.
- **ST-pRRTC:** [arXiv v1, Secs. IV-A and VI-E](https://arxiv.org/html/2609.30533v1)
  supports GPU-parallel space-time RRT-Connect, a shared forward tree, adaptive
  goal-time forests, known obstacle trajectories, and UR5e/Crazyflie demonstrations.
  No universal speedup factor is stated: the reported timing excludes scene setup,
  uses GPU-kernel time, and compares first-solution means on shared-success cases.
  Theoretical guarantees of interval root are not attributed to practical root
  recycling. The CV does not claim an independently verified CUDA implementation.

All seven publications and the original author order are retained. No new
appointment, award, degree date, or hardware platform has been inferred.
