const constants = {
    "service_tier_max": {
        "minimum": 1,
        "S": 7.5,
        "M": 15,
        "L": 30,
        "XL": 60,
        "XXL": 100
    },
    "onesubs_base_days": {
        "S": 30,
        "M": 30,
        "L": 30,
        "XL": 30,
        "XXL": 30
    },
    "onesubs_base_price": {
        "S": 0.25,
        "M": 0.16666666667,
        "L": 0.16666666667,
        "XL": 0.3,
        "XXL": 0.5
    },
    "onesubs_base_increase": {
        "S": 0.001,
        "M": 0.001,
        "L": 0.001,
        "XL": 0.001,
        "XXL": 0.001
    },
    "subscription_tier": {
        "Basic": "S",
        "Standard": "M",
        "Premium": "L",
        "Pro": "XL",
        "Elite": "XXL"
    },
    "month_days": 30,
}

export const date = (days) => {
    const currentDate = new Date()
    const totalDays = (parseInt(days) - 1)
    currentDate.setDate(currentDate.getDate() + totalDays)
    return currentDate
}

const onesubsDailyFee = (tier, days) => {
    const baseDays = constants.onesubs_base_days[tier]
    const basePrice = constants.onesubs_base_price[tier]
    const baseIncrease = constants.onesubs_base_increase[tier]

    const difference = Math.abs(baseDays - days)

    if (difference === 0) {
        return basePrice
    } else {
        return basePrice + (difference * baseIncrease)
    }
}

export const price = (subscription, days, amount=1) => {
    const tier = constants.subscription_tier[subscription]  
    const serviceFee = constants.service_tier_max[tier] / constants.month_days
    const onesubsFee = onesubsDailyFee(tier, days)

    return Math.ceil(days * serviceFee + days * onesubsFee) * amount
}