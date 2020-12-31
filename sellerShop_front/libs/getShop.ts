export const shops = [
    '스마트스토어',
    '쿠팡',
    '11번가'
]

const shopNum = {
    '스마트스토어': 0,
    '쿠팡': 1,
    '11번가': 2,
}

const images = {
    '스마트스토어': require('../imgs/smartstore.jpg'),
    '쿠팡': require('../imgs/coupang.jpg'),
    '11번가': require('../imgs/11street.jpg')
}

export const returnShopNum = (shopName) => {
    return shopNum[shopName];
}

export const getImgSource = (shop) => {
    return images[shop];
}