import swaggerJsdoc from "swagger-jsdoc";
import { serve, setup } from "swagger-ui-express";

const options = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: "HalloDoc API",
            description: "API endpoints for a HalloDoc application",
            contact: {
                name: "Deep Akabari",
                email: "arcadecohort2.1@gmail.com",
                url: "https://github.com/deepakabari/HalloDoc",
            },
            version: "1.0.0",
        },
        servers: [
            {
                url: "http://localhost:3000/",
                description: "Local server",
            },
        ],
    },
    apis: ["./src/routes/*.js"],
};
const swaggerSpec = swaggerJsdoc(options);
function swaggerDocs(app: any) {
    // Swagger Page
    app.use("/docs", serve, setup(swaggerSpec));
    // Documentation in JSON format
    app.get("/docs.json", (req: any, res: any) => {
        res.setHeader("Content-Type", "application/json");
        res.send(swaggerSpec);
    });
}
export default swaggerDocs;
