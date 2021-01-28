export interface brand {
    name: string;
    logo: string;
    siteUrl: string;
    color: string;
    description: { fr: string; en: string };
    mentions?: { fr: string; en: string };
    background: string;
}

export interface howItWorks {
    title: { fr: string; en: string };
    description: { fr: string; en: string };
    order: number;
    imageDesktop: string;
    imageMobile: string;
}

export interface categories {
    partnerCategoryID: number;
    namePC: string;
}

export interface products {
    description: { fr: string; en: string };
    title: { fr: string; en: string };
    image: string;
    price: number;
    order: number;
}

export interface productIntroduction {
    fr: string;
    en: string;
}

export interface offerValues {
    ordinalVPGC: number;
    amountVPGC: number;
}
