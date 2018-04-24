const state = {
    promotions : [
        {
            id: 1,
            promType: '01',
            promSrc: 'New-Promo-4.jpg'
        },
        {
            id: 2,
            promType: '02',
            promSrc: 'New-Promo-10.jpg'
        }
    ]
}
const getters = {
    getPromotionList (state) {
        return payload => state.promotions
    }
}
export default {
    state,
    getters
}