export interface Track {
  title: string
  url: string
}

function driveStreamUrl(fileId: string) {
  return `https://drive.google.com/uc?export=download&id=${fileId}`
}

export const tracks: Track[] = [
  { title: 'Santo, Santo, Santo (Mons. Marco Frisina)', url: driveStreamUrl('1JBlGj8qG_VKxXZkf3k2XtsD61yExdP-o') },
  { title: 'Alma de Cristo (Mons. Marco Frisina)', url: driveStreamUrl('1CycglnVV4mJiUPmz1ncGM5yBY9tizBlp') },
  { title: "Allegri — Miserere mei (King's College, Cambridge)", url: driveStreamUrl('1oVbOOmXGW-TMEgOwJlfT6zqbXCogEImu') },
  { title: 'Pai Nosso (Canto Gregoriano)', url: driveStreamUrl('1SYgy-f4upEvZav13wWjC7aprMnQAw5Fx') },
  { title: 'Senhor que Viestes Salvar — Ato Penitencial', url: driveStreamUrl('1RPV_JwbYxcqJnKLNSk82Bo1dwPePXDuL') },
]
