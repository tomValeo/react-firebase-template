import React from 'react';
import { useParams } from "react-router-dom";

const ProjectDetails = () => {
    const id = useParams().id
    return (
        <div className='container section project-details'>
            <div className='card z-depth-0'>
                <div className='card-content'>
                    <span className='card-title'>Project Title - {id}</span>
                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Duis risus. Vestibulum fermentum tortor id mi. Curabitur vitae diam non enim vestibulum interdum. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos hymenaeos. Duis viverra diam non justo. Duis risus. Vivamus porttitor turpis ac leo. Etiam dictum tincidunt diam. Nullam at arcu a est sollicitudin euismod. Nulla accumsan, elit sit amet varius semper, nulla mauris mollis quam, tempor suscipit diam nulla vel leo. Vestibulum erat nulla, ullamcorper nec, rutrum non, nonummy ac, erat. Sed ac dolor sit amet purus malesuada congue. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Proin in tellus sit amet nibh dignissim sagittis. Nullam feugiat, turpis at pulvinar vulputate, erat libero tristique tellus, nec bibendum odio risus sit amet ante.</p>
                </div>
                <div className='card-action grey ligthen-4 white-text'>
                    <div>Posted by the Net Ninja</div>
                    <div>2nd September, 2am</div>
                </div>
            </div>
        </div>
    )
}

export default ProjectDetails;