"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const user_1 = __importDefault(require("./../../core/entities/user"));
const passport_jwt_1 = require("passport-jwt");
const passport_1 = __importDefault(require("passport"));
const logger_1 = __importDefault(require("../../utils/logger"));
const options = {
    jwtFromRequest: passport_jwt_1.ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: process.env.TOKEN_SECRET,
};
passport_1.default.use(new passport_jwt_1.Strategy(options, async function (jwt_payload, done) {
    logger_1.default.logger.debug(jwt_payload);
    try {
        const user = await user_1.default.findById(jwt_payload.id);
        if (user) {
            return done(null, user);
        }
        else {
            return done(null, false);
            // or you could create a new account
        }
    }
    catch (err) {
        return done(err, false);
    }
}));
/**
 * Login Required middleware.
 */
exports.isAuthenticated = (req, res, next) => {
    if (req.isAuthenticated()) {
        return next();
    }
    res.redirect("/api/login");
};
function authenticateJWT(req, res, next) {
    passport_1.default.authenticate("jwt", { session: false }, function (err, user, info) {
        logger_1.default.logger.debug(err + " " + user + " " + info);
        if (err) {
            console.log(err);
            return res
                .status(401)
                .json({ status: "error", code: "unauthorized", message: info });
        }
        if (!user) {
            return res
                .status(401)
                .json({ status: "error", code: "unauthorized", message: info });
        }
        else {
            return next();
        }
    })(req, res, next);
}
exports.authenticateJWT = authenticateJWT;
/**
 * Authorization Required middleware.
 */
// export const isAuthorized = (
//   req: Request,
//   res: Response,
//   next: NextFunction
// ) => {
//   const provider = req.path.split("/").slice(-1)[0];
//   const user = req.user as IUser;
//   if (_.find(user.tokens, { kind: provider })) {
//     next();
//   } else {
//     res.redirect(`/auth/${provider}`);
//   }
// };
//# sourceMappingURL=passport.js.map