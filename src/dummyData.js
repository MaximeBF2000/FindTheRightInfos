const dummyData = {
  courses: [
    {
      id: "c1",
      title: "React Projects",
      teacherId: "t1",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Est ex explicabo rerum inventore quod id a esse vero illezezfezfezfezfezfezfez",
      medias: ["https://yt3.ggpht.com/ytc/AAUvwng963DN2_MIbKuvMWRrN4KG920h3Y4YHg6KET9vZg=s900-c-k-c0x00ffffff-no-rj"],
      categories: ["Web development", "Front-end development"],
      price: 29.99,
      ressources: [
        { filename: "Exercice 01.docx", filesize: "12.36 Mo", url: "" },
        { filename: "Exercice 02.docx", filesize: "12.36 Mo", url: "" },
        { filename: "Exercice 03.docx", filesize: "12.36 Mo", url: "" }
      ],
      modules: ["c1m1"]
    },
    {
      id: "c2",
      title: "Flutter for Beginners",
      teacherId: "t2",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Est ex explicabo rerum inventore quod id a esse vero illezezfezfezfezfezfezfez",
      medias: ["https://yt3.ggpht.com/ytc/AAUvwni-Wm0ZBDYJYFwySP2esxgc8s9mKiwmI3yJrmjlHQ=s900-c-k-c0x00ffffff-no-rj"],
      categories: ["Mobile development"],
      price: 29.99,
      ressources: [
        { filename: "Exercice 01.docx", filesize: "12.36 Mo", url: "" },
        { filename: "Exercice 02.docx", filesize: "12.36 Mo", url: "" },
        { filename: "Exercice 03.docx", filesize: "12.36 Mo", url: "" }
      ],
      modules: ["c2m1"]
    }
  ],
  modules: [
    {
      id: "c1m1",
      courseId: "c1",
      title: "Module 1 - Introduction",
      duration: 122,
      videos: ["c1m1v1"]
    },
    {
      id: "c2m1",
      courseId: "c2",
      title: "Module 2",
      duration: 122,
      videos: ["c2m1v1"]
    },
  ],
  videos: [
    {
      id: "c1m1v1",
      courseId: "c1",
      moduleId: "c1m1",
      title: "Video 1",
      duration: 122,
      url: "https://www.youtube.com/watch?v=XuFDcZABiDQ&list=PLillGF-RfqbY3c2r0htQyVbDJJoBFE6Rb&ab_channel=TraversyMedia"
    },
    {
      id: "c2m1v1",
      courseId: "c2",
      moduleId: "c2m1",
      title: "Video 2",
      duration: 122,
      url: "https://www.youtube.com/watch?v=1ukSR1GRtMU&list=PL4cUxeGkcC9jLYyp2Aoh6hcWuxFDX6PBJ&ab_channel=TheNetNinja"
    },
  ],
  teachers: [
    {
      id: "t1",
      name: "Traversy Media",
      image: "https://i.udemycdn.com/user/200_H/21681922_4513_5.jpg",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, perspiciatis eos. Voluptatibus maxime at cum recusandae, quo dolor provident nostrum quam odit beatae totam, commodi nesciunt laudantium et sapiente? Dolorem architecto commodi sunt. Magni illo veniam hic incidunt. Dignissimos amet deleniti culpa pariatur itaque! Temporibus ipsum est sunt veritatis amet sequi sapiente corrupti deleniti qui cum non, fuga exercitationem autem corporis esse quod reprehenderit et! Ad soluta ab natus aspernatur voluptates. Tempora libero quidem voluptatem."
    },
    {
      id: "t2",
      name: "The Net Ninja",
      image: "https://yt3.ggpht.com/ytc/AAUvwni-Wm0ZBDYJYFwySP2esxgc8s9mKiwmI3yJrmjlHQ=s900-c-k-c0x00ffffff-no-rj",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, perspiciatis eos. Voluptatibus maxime at cum recusandae, quo dolor provident nostrum quam odit beatae totam, commodi nesciunt laudantium et sapiente? Dolorem architecto commodi sunt. Magni illo veniam hic incidunt. Dignissimos amet deleniti culpa pariatur itaque! Temporibus ipsum est sunt veritatis amet sequi sapiente corrupti deleniti qui cum non, fuga exercitationem autem corporis esse quod reprehenderit et! Ad soluta ab natus aspernatur voluptates. Tempora libero quidem voluptatem."
    },
  ],
}

export default dummyData