import { Get, Route, Response } from "tsoa";

interface PingResponse {
  message: string;
}

@Route("ping")
export default class PingController {
  @Get("/")
  // If you don't specify Response or examples, Swagger will automatically generate them
  @Response(200, "OK", {
    examples: {
      "application/json": {
        message: "hello",
      },
    },
  })

  public async getMessage(): Promise<PingResponse> {
    return {
      message: "hello",
    };
  }
}