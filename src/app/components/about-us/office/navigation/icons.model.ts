export class IconModel {

  readonly FirstStatePoints = [
    {
      start: {x: 41.82, y: 26.30},
      end: {x: 79.23, y: 26.30}
    },
    {
      start: {x: 41.82, y: 50},
      end: {x: 79.23, y: 50}
    },
    {
      start: {x: 41.82, y: 73.01},
      end: {x: 79.23, y: 73.01}
    }
  ];
  readonly SecondStatePoint = [
    {
      start: {x: 0, y: 100},
      end: {x: 50, y: 65}
    },
    {
      start: {x: 50, y: 0},
      end: {x: 50, y: 65}
    },
    {
      start: {x: 100, y: 100},
      end: {x: 50, y: 65}
    }
  ];

  constructor() {
  }

  getListIcon() {
    return JSON.parse(JSON.stringify(this.FirstStatePoints));
  }

  getModelIcon() {
    return JSON.parse(JSON.stringify(this.SecondStatePoint));
  }
}
