export interface Track {
  title: string
  url: string
}

function driveStreamUrl(fileId: string) {
  return `https://drive.google.com/uc?export=download&id=${fileId}`
}

export const tracks: Track[] = [
  { title: 'Faixa 1', url: driveStreamUrl('1JBlGj8qG_VKxXZkf3k2XtsD61yExdP-o') },
  { title: 'Faixa 2', url: driveStreamUrl('1CycglnVV4mJiUPmz1ncGM5yBY9tizBlp') },
  { title: 'Faixa 3', url: driveStreamUrl('1oVbOOmXGW-TMEgOwJlfT6zqbXCogEImu') },
  { title: 'Faixa 4', url: driveStreamUrl('1SYgy-f4upEvZav13wWjC7aprMnQAw5Fx') },
  { title: 'Faixa 5', url: driveStreamUrl('1RPV_JwbYxcqJnKLNSk82Bo1dwPePXDuL') },
]
