const adsModel = require('../model/adsModel')

exports.create = async (req, res) => {
    const { username, adsTitle, phoneNo, email, introduction, description, currencyType, service, location, nationality, language, appearance, socialMedia, charge, gallery, profilePhoto, serviceCharge, region } = req.body
    if (username && adsTitle && phoneNo && email && introduction && description && location && nationality && language && appearance && socialMedia && charge && profilePhoto && serviceCharge && region, gallery) {
        try {
            await adsModel.create({ username, adsTitle, region, location, phoneNo, email, introduction, description, nationality, language, appearance, socialMedia, currencyType, charge, service, profilePhoto, gallery, serviceCharge })
            res.send(true)
        } catch (error) {
            console.log(error.message)
            res.send(fasle)
        }
    } else {
        console.log('Some Information is Missing')
        res.send(false)

    }

}

exports.viewAll = async (req, res) => {
    try {
        const found = await adsModel.findAll()
        res.send(found)
    } catch (error) {
        console.log(error.message)
    }
}


exports.userAds = async (req, res) => {
    const { username } = req.query
    if (username) {
        try {
            const found = await adsModel.findAll({ where: { username } })
            res.send(found)
        } catch (error) {

        }
    } else {
        console.log("User name is missing")
    }
}


exports.view = async (req, res) => {
    const { id } = req.query
    const found = await adsModel.findOne({ where: { id } })
    res.send(found)
}

exports.edit = async (req, res) => {
    const { editing, id } = req.body
    console.log(editing)
    if (id, editing) {
        try {
            await adsModel.update({ ...editing }, { where: { id } })
            res.send(true)
        } catch (error) {
            console.log(error.message)
            res.send(false)
        }
    } else res.send(false)
}



exports.delete = async (req, res) => {
    const { id } = req.body
    try {
        adsModel.destroy({ where: { id } })
        res.send(true)
    } catch (error) {
        console.log(error.message)
        res.send(false)
    }

}

exports.profile = async (req, res) => {
    const { id } = req.query
    const dates = new Date()
    const date = `${dates.getDate()}/${dates.getMonth() + 1}/${dates.getFullYear()}`
    if (id) {
        try {
            const found = await adsModel.findOne({ where: { id } })
            if (found?.visibility) {
                await adsModel.increment({ view: 1 }, { where: { id } })
                adsModel.update({ analytics: { ...found.analytics, [date]: found.analytics[date] + 1 || 1 } }, { where: { id } })

                res.send(found)
            } else res.send(false)
        } catch (error) {
            console.log(error.message)
        }
    } else res.send(false)
}

exports.homeAds = async (req, res) => {
    res.send('test')
}

exports.createComment = async (req, res) => {
    res.send('test')
}

exports.getComment = async (req, res) => {
    res.send('test')
}

exports.verificationRequest = async (req, res) => {
    const { verificationPhoto, id } = req.body
    if (verificationPhoto, id) {
        try {
            await adsModel.update({ verificationPhoto, verifyRequest: true }, { where: { id } })
            res.send(true)
        } catch (error) {
            console.log(error.message)
        }
    } else res.send(false)
}


exports.allVerificationRequest = async (req, res) => {
    try {
        const found = await adsModel.findAll({ where: { verifyRequest: true } })
        res.send(found)
    } catch (error) {
        console.log(error.message)
        res.send(false)
    }
}
exports.verificationCount = async (req, res) => {
    try {
        const found = await adsModel.findAll({ where: { verifyRequest: true } })
        res.send({ count: found.length })
    } catch (error) {

    }
}

exports.analytics = async (req, res) => {
    const { id } = req.query
    if (id) {
        const found = await adsModel.findOne({ where: { id }, raw: true })
        res.send(found.analytics)
    } else res.send(false)

}