export const personalInfo = {
  name: "Xue Chuhui",
  chineseName: "薛楚慧",
  title: "Computer Vision Researcher",
  email: "xuec0001@gmail.com",
  phone: "+65-94683959",
  location: "Singapore",
  profileImage: "/profile.jpg", // 照片路径：放在 public 目录下，或使用相对路径
  social: {
    linkedin: "https://www.linkedin.com/in/chuhui-xue-bb68bb110/", // Placeholder as URL not provided in resume text
    scholar: "https://scholar.google.com/citations?user=KJU5YRYAAAAJ&hl=en", // Placeholder as URL not provided in resume text
    github: "https://github.com/chxue233", // Placeholder based on resume mention
  }
};

export const education = [
  {
    school: "Nanyang Technological University",
    degree: "Ph.D. at School of Computer Science and Engineering",
    year: "2018 - 2022",
    details: [
      "Supervisor: Prof. Lu Shijian",
      "Thesis: Accurate and robust detection and recognition of texts in scene"
    ]
  },
  {
    school: "Nanyang Technological University",
    degree: "Bachelor of Engineering (Computer)",
    year: "2013 - 2017",
    details: [
      "First Class Honours",
      "Dean's List (Top 5%)"
    ]
  }
];

export const experience = [
  {
    company: "ByteDance Singapore",
    role: "Research Scientist",
    period: "May 2022 - Present",
    location: "Singapore",
    highlights: [
      {
        category: "Keywords",
        description: "Agent | MLLM | Data | OCR"
      },
    ]
  },
  {
    company: "ByteDance Singapore",
    role: "Research Intern",
    period: "Dec 2020 - May 2022",
    location: "Singapore",
    highlights: [
      {
        category: "Keywords",
        description: "OCR"
      }
    ]
  },
  {
    company: "Damo Academy, Alibaba",
    role: "Research Intern",
    period: "Nov 2019 - Jan 2020",
    location: "Hangzhou",
    highlights: [
      {
        category: "Keywords",
        description: "OCR | Scene Text Erasure"
      }
    ]
  }
];

export const publications = [
  {
    title: "Language Matters: A Weakly Supervised Vision-Language Pre-training Approach for Scene Text Detection and Spotting",
    authors: "Chuhui Xue, Wenqing Zhang, Yu Hao, Shijian Lu, Philip Torr, and Song Bai",
    venue: "ECCV 2022",
    tags: ["Oral"],
    year: 2022,
    arxiv: "https://arxiv.org/abs/2207.10231",
    code: "https://github.com/example/oCLIP"
  },
  {
    title: "Dragdiffusion: Harnessing diffusion models for interactive point-based image editing",
    authors: "Yujun Shi, Chuhui Xue, Jiachun Pan, Wenqing Zhang, Vincent YF Tan, Song Bai",
    venue: "CVPR 2024",
    tags: ["Spotlight"],
    year: 2024,
    arxiv: "https://arxiv.org/abs/2306.14435",
    code: "https://github.com/example/dragdiffusion"
  },
  {
    title: "Is synthetic data from generative models ready for image recognition?",
    authors: "Ruifei He, Shuyang Sun, Xin Yu, Chuhui Xue, Wenqing Zhang, Philip Torr, Song Bai, and Xiaojuan Qi",
    venue: "ICLR 2023",
    tags: ["Spotlight"],
    year: 2023,
    arxiv: "https://arxiv.org/abs/2210.07574",
    code: "https://github.com/example/synthetic-data"
  },
  {
    title: "Contextual Text Block Detection towards Scene Text Understanding",
    authors: "Chuhui Xue, Jiaxing Huang, Shijian Lu, Changhu Wang, and Song Bai",
    venue: "ECCV 2022",
    year: 2022,
    arxiv: "https://arxiv.org/abs/2207.08577",
  },
  {
    title: "Fourier document restoration for robust document dewarping and recognition",
    authors: "Chuhui Xue, Zichen Tian, Fangneng Zhan, Shijian Lu, and Song Bai",
    venue: "CVPR 2022",
    year: 2022,
    arxiv: "https://arxiv.org/abs/2203.09903",
  },
  {
    title: "Msr: Multi-scale shape regression for scene textdetection",
    authors: "Chuhui Xue, Shijian Lu, and Wei Zhang",
    venue: "IJCAI 2019",
    year: 2019,
    arxiv: "https://arxiv.org/pdf/1901.02596",
  },
  {
    title: "Accurate scene text detection through border semantics awareness and bootstrapping",
    authors: "Chuhui Xue, Shijian Lu, and Fangneng Zhan",
    venue: "ECCV 2018",
    year: 2018,
    arxiv: "https://openaccess.thecvf.com/content_ECCV_2018/papers/Chuhui_Xue_Accurate_Scene_Text_ECCV_2018_paper.pdf",
  },
  {
    title: "I2C2W: Image-to-Character-to-Word Transformers for Scene Text Recognition",
    authors: "Chuhui Xue, Jiaxing Huang, Wenqing Zhang, Shijian Lu, Changhu Wang, and Song Bai",
    venue: "T-PAMI 2022",
    year: 2022,
    arxiv: "https://arxiv.org/abs/2105.08383",
  },
  {
    title: "Understanding and mitigating dimensional collapse in federated learning",
    authors: "Yujun Shi, Jian Liang, Wenqing Zhang, Chuhui Xue, Vincent YF Tan, and Song Bai",
    venue: "T-PAMI 2024",
    year: 2024,
    arxiv: "https://arxiv.org/abs/2210.00226",
  },
  {
    title: "Lowis3d: Language-driven open-world instance-level 3d scene understanding",
    authors: "Runyu Ding, Jihan Yang, Chuhui Xue, Wenqing Zhang, Song Bai, and Xiaojuan Qi",
    venue: "T-PAMI 2024",
    year: 2024,
    arxiv: "https://arxiv.org/abs/2308.00353",
  },
  {
    title: "Detection and Rectification of Arbitrary Shaped Scene Texts by using Text Keypoints and Links",
    authors: "Chuhui Xue, Shijian Lu, and Steven Hoi",
    venue: "Pattern Recognition 2022",
    year: 2022,
    arxiv: "https://arxiv.org/abs/2103.00785",
  },
  {
    title: "Debiasing text-to-image diffusion models",
    authors: "Ruifei He, Chuhui Xue, Haoru Tan, Wenqing Zhang, Yingchen Yu, Song Bai, Xiaojuan Qi",
    venue: "ACM Multimedia Workshop",
    year: 2024,
    arxiv: "https://dl.acm.org/doi/pdf/10.1145/3689090.3689387",
  },
  {
    title: "Free-ATM: Harnessing Free Attention Masks for Representation Learning on Diffusion-Generated Images",
    authors: "David Junhao Zhang, Mutian Xu, Jay Zhangjie Wu, Chuhui Xue, Wenqing Zhang, Xiaoguang Han, Song Bai, Mike Zheng Shou",
    venue: "ECCV 2024",
    year: 2024,
    arxiv: "https://www.ecva.net/papers/eccv_2024/papers_ECCV/papers/05708.pdf",
  },
  {
    title: "Mixed samples as probes for unsupervised model selection in domain adaptation",
    authors: "Dapeng Hu, Jian Liang, Jun Hao Liew, Chuhui Xue, Song Bai, Xinchao Wang",
    venue: "NIPS 2023",
    year: 2023,
    arxiv: "https://proceedings.neurips.cc/paper_files/paper/2023/file/7721f1fea280e9ffae528dc78c732576-Paper-Conference.pdf",
  },
  {
    title: "Pla: Language-driven open-vocabulary 3d scene understanding",
    authors: "Runyu Ding, Jihan Yang, Chuhui Xue, Wenqing Zhang, Song Bai, Xiaojuan Qi",
    venue: "CVPR 2023",
    year: 2023,
    arxiv: "https://openaccess.thecvf.com/content/CVPR2023/papers/Ding_PLA_Language-Driven_Open-Vocabulary_3D_Scene_Understanding_CVPR_2023_paper.pdf",
  },
  {
    title: "Is synthetic data from generative models ready for image recognition?",
    authors: "Ruifei He, Shuyang Sun, Xin Yu, Chuhui Xue, Wenqing Zhang, Philip Torr, Song Bai, Xiaojuan Qi",
    venue: "ICLR 2023",
    year: 2023,
    arxiv: "http://arxiv.org/pdf/2210.07574",
  }
];

export const patents = [
  {
    title: "Pre-training for scene text detection",
    number: "US Patent 12,254,707",
    year: "2025",
    authors: "Chuhui Xue, Wenqing Zhang, Yu Hao and Song Bai"
  },
  {
    title: "Validation of unsupervised adaptive models",
    number: "US Patent 12,340,565",
    year: "2025",
    authors: "Song Bai, Dapeng Hu, Jun Hao Liew, Chuhui Xue"
  }
];

export const awards = [
  "Runner-Up Out-of-Vocabulary End-to-end Recognition Challenge, Text in Everything Workshop at ECCV 2022",
  "Research Scholarship, Nanyang Technological University",
  "Singapore SM2 Scholarship"
];
