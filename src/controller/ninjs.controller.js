import NinjaModel from '../models/ninja.model';
import ninjaModel from '../models/ninja.model';
// import ninjaModel from '../models/ninja.model';

export default class Ninja {

    constructor() { }

    static get(req, res) {
        NinjaModel.find({}, function (err, user) {
            if (err) throw err;
            res.send({ status: true, data: user });
        })
    }


    static post(req, res) {
        console.log('req.body ', req.body);
        const newNinja = new NinjaModel(req.body);
        console.log(req.body, "req.body");
        newNinja.save(function (err, record) {
            if (err) {
                res.send({ status: false });
            } else {
                res.send({ status: true, data: record });
            }
        })
    }
    static put(req, res, next) {
        var id = req.params.id;
        NinjaModel.findByIdAndUpdate({ _id: req.params.id }, req.body).then(() => {
            NinjaModel.findOne({ _id: id }).then((ninja) => {
                res.send(ninja)
            });
        }).catch(next)
    }

    static delete(req, res, next) {
        NinjaModel.findByIdAndRemove({ _id: req.params.id }).then((ninja) => {
            console.log(ninja);
            res.send(ninja)
        })
    }
    static completed(req, res, next) {
        NinjaModel.find({ checked: true }).then((ninja) => {
            console.log(ninja)
            res.send(ninja)
        })

    }
    static active(req, res, next) {
        NinjaModel.find({ checked: false }).then((ninja) => {
            res.send(ninja)
        })
    }

    static checkedAll(req, res, next) {
        NinjaModel.update({ checked: true }).then((ninja) => {
            res.send(ninja)
        })

    }
}






