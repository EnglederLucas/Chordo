import User, { IUser } from "./../../core/entities/user";
import { JwtTokenPayload } from "./../../utils/util.entities";
import {
  Strategy as JwtStrategy,
  ExtractJwt,
  StrategyOptions,
} from "passport-jwt";
import passport from "passport";
import { Request, Response, NextFunction } from "express";
import $Log from "../../utils/logger";

const options: StrategyOptions = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: process.env.TOKEN_SECRET as string,
};

passport.use(
  new JwtStrategy(options, async function (jwt_payload: JwtTokenPayload, done) {
    $Log.logger.debug(jwt_payload);

    try {
      const user = await User.findById(jwt_payload.id);

      if (user) {
        return done(null, user);
      } else {
        return done(null, false);
        // or you could create a new account
      }
    } catch (err) {
      return done(err, false);
    }
  })
);

/**
 * Login Required middleware.
 */
export const isAuthenticated = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (req.isAuthenticated()) {
    return next();
  }
  res.redirect("/api/login");
};

export function authenticateJWT(
  req: Request,
  res: Response,
  next: NextFunction
) {
  passport.authenticate("jwt", { session: false }, function (err, user, info) {
    $Log.logger.debug(err + " " + user + " " + info);

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
    } else {
      return next();
    }
  })(req, res, next);
}

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
