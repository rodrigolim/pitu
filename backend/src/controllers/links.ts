import { Request, Response } from 'express'
import { Link } from '../models/link'

const links :Link[] = []
let proxId = 1;


function postLinks(req: Request, res: Response){
    const link = req.body as Link;
    link.id = proxId++;
    res.send('postLinks')
}

function getLinks(req: Request, res: Response){
    res.send('getLinks')
}

function hitLinks(req: Request, res: Response){
    res.send('hitLinks')
}

export default {
    postLinks, 
    getLinks, 
    hitLinks
}