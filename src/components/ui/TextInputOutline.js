import React from 'react';

import './css/TextInputOutline.css';

const TextInputOutline = (props) => (
    <div className={"form-group form-group-outline d-block position-relative " + props.className}>
        <label className="font-weight-bold" htmlFor={props.id}>
            {props.label}
            {props.required &&
                <span className="text-danger">*</span>
            }
        </label>
        {props.isTextarea ? (
            <textarea
                className="form-control"
                id={props.id}
                rows={props.rows || "4"}
                placeholder={props.placeholder}
                value={props.value}
                onChange={props.onChange}
                name={props.name || props.id}
                required={props.required ? "true" : "false"}
            ></textarea>
        ) : (
            <input
                type={props.type}
                className="form-control"
                id={props.id}
                placeholder={props.placeholder}
                value={props.value}
                onChange={props.onChange}
                name={props.name || props.id}
                required={props.required ? "true" : "false"}
            />
        )}
    </div>
);

export default TextInputOutline;