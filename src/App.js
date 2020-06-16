import React, { useState } from "react";
import {PythagorasTree} from "./Tree"

import {
  Container,
  Form,
  FormItem,
  FormLabel,
    Input
} from "./componentStyles/styles.js";

export default function App() {

  const [state, setState] = useState({
    totalLevels: 1,
    sprout: 0.01,
    size: 100,
    sway: 0.00,
  });

  function handleChange(evt) {
    const value =
        evt.target.type === "checkbox" ? evt.target.checked : evt.target.value;
    setState({
      ...state,
      [evt.target.name]: value
    });
  }

  return (
  <Container>

    <PythagorasTree
        sprout ={state.sprout}
        sway={state.sway}
        totalLevels={state.totalLevels}
        size={state.size}
    >
      <button type="button" />
    </PythagorasTree>

    <Form>

      <FormItem>
        <FormLabel htmlFor="totalLevels">tree height</FormLabel>

        <Input
            type="range"
            name="totalLevels"
            min="0"
            max="5"
            value={state.totalLevels}
            onChange={handleChange}
            step="0.01"
        />

      </FormItem>

          <FormItem>
            <FormLabel htmlFor="sprout">sprout</FormLabel>

            <Input
                type="range"
                name="sprout"
                min="0.01"
                max="0.15"
                value={state.heightFactor}
                onChange={handleChange}
                step="0.01"
            />

          </FormItem>

      <FormItem>
        <FormLabel htmlFor="sway">sway</FormLabel>

        <Input
            type="range"
            name="sway"
            min="-0.09"
            max="0.09"
            value={state.sway}
            onChange={handleChange}
            step="0.01"
        />

      </FormItem>
        </Form>

      </Container>
  );
}
