import {
  Controller,
  HttpStatus,
  HttpException,
  Get,
  Post,
  Put,
  Delete,
  Patch,
} from "./deps.ts";

// use the Controller class decorator to specify the
// base route for the controller.
@Controller("/api")
class DefaultController {
  // Use Get, Put, Post, Patch, and Delete function
  // decorators to define routes. Use HttpStatus
  // to define the default response code.
  @Get("/")
  @HttpStatus(300)
  public indexAction(ctx: any) {
    // Return plain JSON and it will be sent as a
    // json response to the client.
    return {
      hello: "hi!",
    };
  }
  @Get("/:id")
  @HttpStatus(200)
  public idAction(ctx: any) {
    return {
      id: ctx.params.id,
    };
  }
  // All requests reply with a 200 status with the
  // exception of POST requests, which will reply
  // with a 201, if not @HttpStatus function
  // decorator is supplied. Exceptions when
  // in dev mode will be reported to the
  // console.
  @Post("/")
  public postAction(ctx: any) {
    throw new HttpException("Forbidden", 403);
  }
  // You can have async actions on your controllers.
  // Rejections from promises will be appropriately
  // handled. You can try this by hitting this
  // route
  @Put("/")
  public async putAction(ctx: any) {
    await new Promise((resolve, reject) => reject());
  }
  // While it is not recommended, you do have access the the
  // response object here directly provided by oak.
  // you can use this if you wish.
  @Delete("/")
  public deleteAction(ctx: any) {
    ctx.response.body = {
      message: "Ignore the router and directly access the oak response object",
    };
  }
  // When a method returns no response and does not access the
  // oak response object directly, a 204 No Content status
  // with an emply payload will be sent to the user. In
  // development mode, you will be presented with a
  // warning when this is the case.
  @Patch("/")
  public patchAction(ctx: any) {}
}

export default DefaultController;
