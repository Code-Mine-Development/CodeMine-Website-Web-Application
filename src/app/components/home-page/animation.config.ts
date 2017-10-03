export const AnimationConfig = {
  duration: 50000,      // scroll distance to end of animation (in pixels)
  animationFrames: 1620,// total count of animation frames
  speed: .01,
  animationPath: 'assets/animation/',
  animationFileName: 'codemine_anim_full5_0',
  sections: [
    {
      title: 'HOME.language.title',
      text: 'HOME.language.description',
      start: 0,
      end: 150
    },
    {
      title: 'HOME.knowledge.title',
      text: 'HOME.knowledge.description',
      start: 150,
      end: 300
    }
  ]
};
