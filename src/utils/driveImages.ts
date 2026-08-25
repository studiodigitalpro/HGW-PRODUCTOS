/**
 * HGW Official Product & Corporate Assets from Google Drive
 */

export function getDriveUrl(idOrUrl: string): string {
  if (!idOrUrl) return '';
  if (idOrUrl.startsWith('http://') || idOrUrl.startsWith('https://')) {
    const match = idOrUrl.match(/\/file\/d\/([a-zA-Z0-9_-]+)/);
    if (match && match[1]) {
      return `https://lh3.googleusercontent.com/d/${match[1]}`;
    }
    return idOrUrl;
  }
  return `https://lh3.googleusercontent.com/d/${idOrUrl}`;
}

export function getDriveThumbnailUrl(idOrUrl: string, size = 800): string {
  if (!idOrUrl) return '';
  let id = idOrUrl;
  if (idOrUrl.startsWith('http://') || idOrUrl.startsWith('https://')) {
    const match = idOrUrl.match(/\/file\/d\/([a-zA-Z0-9_-]+)/);
    if (match && match[1]) {
      id = match[1];
    } else {
      return idOrUrl;
    }
  }
  return `https://drive.google.com/thumbnail?id=${id}&sz=w${size}`;
}

export const HGW_DRIVE_ASSETS = {
  // --- Accesorios de Turmalina ---
  collarTurmalina38: '1wdDMN4XlpJN2sGED96RH7ZT0kaTr8E6v',
  collarTurmalina39: '1uSwUjCcNSCyMHAz0x5mvdNlexv_bB-qf',
  collarTurmalina41: '1m-oJwyYh2s_UYxHSSSg4NFK2AzddhMtw',
  collarTurmalina37: '1CZ53tY_uYxJjb8Pw6nbCF5YGqIWQgPq3',
  collarTurmalina42: '1AdAnRMxKqvJVNSnS0EkCoz4c6m1VcK99',
  pulseraTurmalina34: '1pd6CAgYuRKp6xDSPcJEoHyCbHnGJOMV7',
  pulseraTurmalina33: '1Gmvn2ELPTl3Kwwf4I0E1isvjMEu_Co3o',
  pulseras1024: '1WxbDGgZ24YVUPpLXNIesw3sLbRV666KV',
  plantillasTurmalinaWebp: '1nhF-NyKBXeXUxqOOaZPE9-XWpqs5C9y_',
  plantillasTurmalinaPng: '1YEQ5pfuudlaMJjjvow20fN6wrtNgUi6E',
  protectorRodillaNoBg: '1mmdH5ouNcl7Oy4qwA-xmez1Fy6whE66g',
  protectorRodillaJpg: '1u5cYYuK1H7Veb-fGVPsekXzbDIvExJLv',
  protectorRodillaPiedras: '1iMY7Z8V6G72SF3e4IjL0d9Ge-D0dPEoJ',
  protectorCinturaPiedras: '1r3aUhi5333obLfnW20I8_VQGch-joevd',
  protectorCinturaJpg: '1BFUS4vusJt949hJCOehQSftMAywoqSpx',
  protectorCinturaNoBg: '1PwJi9q9lCwzCFFh_EF590VwNkxOboDgi',
  protectorCuelloNoBg: '1bhhZCig3sZYn_9qdLUHO0NXW8QN-M5VD',
  protectorCuelloJpg: '1gtwL3ulyWc8iWeu_0H0NAei-JZxQOk1T',
  protectorCuelloAlt: '1CvrdxAX3gxetirnpHAVyfqCrpRSQ9Ol0',
  colgantePiedraEnergetica: '1HAB5j8wJlW3qAg2p99Ukhkxwl4yJtonJ',

  // --- Cuidado Personal ---
  toallaSanitariaDia: '1xQZJzQQGP7Xf1HdcIZsbaoHMEdgteXm8',
  toallaSanitariaNoche: '1vmPomxc2GqLY-TlcYHaZhsg9TVo_2t9T',
  protectoresIntimos: '1BG5WNt0-W9QqvtKGE8P6EvwicZbAlcGA',
  pastaTurmalinaNegraPng: '1y-4nNnYCpibPY445jWvimVl0KSv5N9L6',
  pastaTurmalinaNegraNoBg: '1a4DGuy5n0IxYv3Qz6d5GbuCqfvVDrQaq',
  pastaTurmalinaBlancaOng: '1yUYF947AKl6sHQzr3r1J0osTaKhwLFVg',
  pastaTurmalinaBlancaPng: '18Hc8CNusf3omof2f8XG0LwbWcMVE4Hz5',
  pastaProbioticosJpg: '1TGMwLpJczROw8WB3T2SVdCiELpEni6QB',
  pastaProbioticosPng: '1anfcSThO1ZWfpsVPTCUDuaEqepcb0K6h',

  // --- Alimentos & Bebidas Funcionales ---
  blueberryCandyJpg: '1RnzqoZ3FUGrRYH5X5Yo_WxGDL7opwwfE',
  blueberryCandyP500: '1-iUyftIyXYkGf6LzMDyeQyrnD8U0i6H4',
  blueberryCandyWebp: '1eTFs4b9a7wEIsAkODOfnbDNoVFtQctAD',
  mermeladaArandano: '1_5DlGwk1pxeaVa0aBnv_hdN7gRNcsLSB',
  berryJuiceHighVc: '1soRruTg-3cQ5NccJZrza5fzfM4Hrl9gA',
  freshDrinkChangJingJing: '1sxM3-0WqqI13ADKvU5QG25AMozh3BgD0',
  freshDrinkP500: '1c3SMUWaUWIMsfVFywOPSaa0bQAJzdNnY',
  freshDrinkColon: '1UFx0FZ6Inbru3b_gGpBgiIeNzxV8vu0C',
  teQuemadorGrasa: '11PunA1eraGhCqxkz4m4zwgTohgLhfj8b',
  proshapingP500: '10KQgXbUMA46qqEQV6AMueytWegZ8G4CK',
  cafeTrebolJpg: '1d3kM-6Gqm0DcSwS2cfuuYkZ10036b8Br',
  cafeTrebolPng: '1Ko69VZDes855GTD4ROi8MQC8O6NwzyPH',
  cafeCordycepsJpg: '1GjEut1ue2NkzQjnH2jc8JRpHc4ZkeqY3',
  cafeCordycepsCeps: '1N3un1TV1b14yE0Me8Ufy9xb1VPYxVngr',
  cafeCordycepsP500: '1XxOvaE4NGKKMyGTzrgdfZJgGfeOk3xae',
  cordycepsCoffeePng: '1qyyUVAmR4z45gMHXfzdc6gjYYaauk2ob',
  blackTeaCoffeeJpg: '17YD4LnY_THurfVpCOA1uX1ThnT6ilvec',
  blackTeaCoffeeP500: '1YHCsgPxdILXLPyzlU2_-9tFWfh98MhVZ',
  blueberryCoffeeJpg: '1b2KTKEMfvEnWG_iG9_Zv9FuYGo07R-bW',
  blueberryCoffeeP500: '1BL58MS4C_t1yzzh-iFoKB8VUhlIQLrcY',
  lactiberryP500: '1LPWR1rp6l6bNZfF6dVqn59hoUp4IO7vB',
  ashwagandhaCoffeeJpg: '1-J5Hhsv4TSrY7nKAbwS2jwxDE1EoBPMw',
  ashwagandhaCoffeePng: '1_qaxS2jw74lFbjMHsOmhkxmhFW2koh0V',
  cafeGanodermaJpg: '1N1VLXoYFPxS4Jur4xzYBduxwenHUwm8s',
  cafeGanodermaP500: '10OxyVm5niPw-3OqGfmLEDjcxxKNHtuww',
  berryGanoP500: '14SVaSZNV1hhG2rWOC7srf2u2fdBJNaSN',
  proteinaSoyaP500: '1sXrkO5cC8ETS71nPmX00rWo7SY2BX4k6',
  proteinaSoyaEs1: '1U2u6tff07Xtr3JlYkmP9zSZvkoqapP-L',
  proteinaSoyaPolvo: '14wSgWkSHp-gZplrOiFO0h5TyXqGXEpy0',
  proteinaSoyaNoBg: '1gC9WMwtRCjx3L0XKn1UuNGYY3QCLURZg',
  colagenoP500: '1YO8lm6tWUdNmeZkFXrOfVCKu5YVG9_xI',
  chocoBluePng: '1jVJZz8JiIhGSd3ryDxGvHFLFhFo1t1_E',
  chocoBlueWebp: '15u-upP9Ikr5wT3NaXBhuqxYnu5i6V6aI',
  chocoBlueNoBg: '1bz46PTKOarDxdQbT9un0bz5nP7NK5CTy',
  chocoGanoNoBg: '1U9wWgRhWaGPs27VaNXD00SILOIs2RoT-',
  chocoGanoPng: '14nDoRq2jYsuMPdEUwY6E6JRtEtnlk5Bt',
  chocoGanoWebp: '1IJxApdBbMM3PVAGtPLjQMxQdwbeEwYlQ',
  vinoArandanosJpg: '1XdBwlYSMfgEZe6jlzc2xh0tHCM1TSVxA',

  // --- Caramelos Funcionales ---
  coffeeCandyJpg: '1SmLTYYOVnqjQTMQ4imp7oe2T40cf4JEc',
  coffeeCandyPng: '1Kan7CVIAsQyZPzmNNJPOqyuNGPtP6DDe',
  coffeeCandyHgwPng: '11s3bTucHLGU1SnORVRSj62KWk4_9q5UH',
  biolactiCandyPng: '1rwI9Shy4hp1oHAAHsmcGYrdgkKsC41MS',
  biolactiCandyHgw: '1zUg42gcrv42BM_MCHkS9wTCBzWge3PsC',
  gestifruitCandyJpg: '1goszEagtDMq7K1G9A7u9IXcDVU7IDqAO',
  gestifruitCandyJfif: '15rKusJJbgUAzB6Yu8vH9FSGSSbfQVkbK',
  gestifruitCandyPng: '1kNbj0DzhZj2xecPgte9lgONmTbd2q9Kd',
  peptiproCandyPng: '1gHxY-UX5puIPcxK6R135h2MX3bEBGska',
  herbalFreshCandyPng: '1og_3IQNAgPXBsql5AO_ImYNRqoAblMkV',
  herbalFreshCandyJpg: '1Ocrmo8B5Ghx0gbiminuU22TYkMUOaiLu',
  herbalFreshCandyJfif: '1tsoE60ELuphASUcfxcV0yv51QfViGjqy',
  moruvaCandyPng: '1gbrmhS136n1Pej_K26zLQalBM_dDS_4V',
  ganubiCandyPng: '1HQHBV5uwqiP9c9Vm4zCsdZoPymiy5q09',

  // --- Suplementos ---
  spirulinaCapsulas: '1SADmRbxl3z9_CEBgDHuLc2O7nQR79rJR',

  // --- Equipos & Hogar ---
  thermoTurmalinaJpg: '1l7wJQ4JAWdbXk_w6ja4MwHZlDaYU7kzs',
  thermoTurmalinaNoBg: '18UGgBcYt4YgxAqspXR-VljEwsUD3j6_H',
  coffeeCupNoBg: '13XUtP3lzi8O_XbPqj7w3xdA2777aEaDB',
  coffeeCupJpg: '1-IIhkesEGnujzpgAtpahGO3seu0iLIPK',
  hervidorElectricoNoBg: '1-vuN0OfqCUQQO3TubNXP6YCOqGLvrBA6',
  hervidorElectricoPng: '1-YT5Gg-QCyHoSn25_7KCSuWwXrbQ5l_S',
  vasoTermicoNoBg: '1LwTIe6Qc6lilWXTPdhk_9MVfVkgujnlW',
  vasoTermicoJpg: '17F-ngbKdmnHNGbQEYqgkmupnjc37F8VD',
  almohadaTurmalinaNoBg: '1fpUgxErX0MQhzbjJ2u2U-wdeZYXpJmhr',
  penGelJpg: '1erQ4yMHlxpIgMwmp5cHUmQM3nbKgxaEp',

  // --- Belleza ---
  pressOnNailsPng: '1bF3G97NO_XRwR41uWi26lMvNq5qTz3hh',
  pressOnNailsHgw: '15sCBYw7djn_eJqvUZvRQZVlccsp4Gxv5',
  pressOnNailsPostizas: '1OrnKTe8u3eFqkYJ7ucQ6C3BcNiBHVRm6',

  // --- Corporativo / Certificaciones / Banners ---
  tiendaOnlineHgw: '1qiIrjqio2z9qomLGY5y0iO3lPmqTop5b',
  sobreHgw: '1ehIzKeTz9-C4YWT_SJ9Nqqrx-lsP21A4',
  productosHgwBanner: '1_L_oOKHDV41teoKdnxfXtEBAxL4mxe_T',
  videoThumbnail: '1Z7Qs1y2pPLUXDCOBsPRtHzXYRQPPpTiS',
  promoBanner1: '1vU6gLcV22ncnf5cCiQUR-kvXdrhnKdtp',
  promoBanner2: '14pCWpxdnmKIe1QU8cYVHINI7z-jBbVZ8',
  promoBanner3: '1mlKpPuWYBqyEhs9pqjLhF-WEfYFxqzR3',
  certFda: '1Y-558vlkBvhzP8Q9EVeXUtdlxI7I2lor',
  certIso9001: '1P6ofoRj1qRSl5_4DnIMipaa44OzC8Nba',
  certGmp: '1Da2Y3oO8DbsgyNcvrufuQcHjZZkvAF6g',
  certHaccp: '19rx-TaTo4rXEhq7zTQAs0P4DzjJKx90m',
  certHalalComite: '1TBsykAJxzWlqK3w7UEe_JbLGMFcAm-hX',
  certHalalCertified: '1WkdhJL2x4hsIKErhU9wjPx6Lg0G0O7uf',
  certGlobalGap: '1ODgx9Uq3uoJ0QeaygMJLjsWjBfRuX5gn',
  certBpaGps: '1tuhdZgWFbIPd5sEA6JVC2djVP38b45Vw'
};
