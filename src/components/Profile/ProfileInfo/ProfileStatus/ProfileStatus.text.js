﻿import React from "react";
import {create} from "react-test-renderer";
import ProfileStatus from "./ProfileStatus";

describe('ProfileStatus component', () => {
    test("status from props should be in state",() => {
        const Component = create(<ProfileStatus status={"kek"}/>);
        const instance = Component.getInstance();
    })
});