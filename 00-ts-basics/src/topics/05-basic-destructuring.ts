interface AudioPlayer {
  audioVolume: number;
  songDuration: number;
  songName: string;
  details: Details;
}

interface Details {
  author: string;
  year: number;
}

const audioPlayer: AudioPlayer = {
    audioVolume: 90,
    songDuration: 36,
    songName: "Bugambilia",
    details: {
        author: "Nassa Histoires",
        year: 2023
    }
}

console.table(audioPlayer)

const [ , , P3 ]: string[] = ['Goku','Vegeta','Picolo']

console.log(P3)


export {};
