import { Box, Button, Input } from "@mui/material";
import React, { useState } from "react";
import { playerDetails } from "../Context/Types";

function CharacterInput() {
  const [inputList, setInputList] = useState<any[]>([
    {
      index: 0,
      characterName: "",
      characterAC: null,
      characterInitative: null,
      characterHealth: null,
      characterLevel: null,
    },
  ]);

  // handle input change
  const handleInputChange = (
    e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>,
    index: any
  ) => {
    const { name, value } = e.target;
    const list = [...inputList];
    list[index][name] = value;
    setInputList(list);
  };

  // handle click event of the Remove button
  const handleRemoveClick = (index: number) => {
    const list = [...inputList];
    list.splice(index, 1);
    setInputList(list);
  };

  // handle click event of the Add button
  const handleAddClick = () => {
    setInputList([
      ...inputList,
      {
        characterName: "",
        characterAC: null,
        characterInitative: null,
        characterHealth: null,
        characterLevel: null,
      },
    ]);
  };

  // const females = people.filter(person => person.gender === 'female');

  const findAverageLevels = (arr: any[]): number => {
    const { length } = arr;
    return arr.reduce((acc, val) => {
      return acc + val.characterLevel / length;
    }, 0);
  };

  return (
    <Box
      sx={{
        fisplay: "flex",
        paddingTop: "40px",
        width: "100%",
      }}
    >
      {inputList.map((x, i) => {
        return (
          <Box sx={{ display: "flex", flexDirection: "row", width: "800px" }}>
            <Box>
              <Input
                name="characterName"
                placeholder="Enter Character Name"
                value={x.firstName}
                onChange={(e) => handleInputChange(e, i)}
              />
            </Box>
            <Box>
              <Input
                sx={{ marginLeft: "16px" }}
                className="ml10"
                name="characterAC"
                placeholder="Enter Armor Class"
                value={x.lastName}
                onChange={(e) => handleInputChange(e, i)}
              />
            </Box>
            <Box>
              <Input
                sx={{ marginLeft: "16px" }}
                className="ml10"
                name="characterInitative"
                placeholder="Enter Initiative"
                value={x.lastName}
                onChange={(e) => handleInputChange(e, i)}
              />
            </Box>
            <Box>
              <Input
                sx={{ marginLeft: "16px" }}
                className="ml10"
                name="characterHealth"
                placeholder="Enter Health"
                value={x.lastName}
                onChange={(e) => handleInputChange(e, i)}
              />
            </Box>
            <Box>
              <Input
                sx={{ marginLeft: "16px" }}
                className="ml10"
                name="characterLevel"
                placeholder="Enter Level"
                value={x.lastName}
                onChange={(e) => handleInputChange(e, i)}
              />
            </Box>
            <Box>
              <Box>
                {inputList.length !== 1 && (
                  <Button onClick={() => handleRemoveClick(i)}>Remove</Button>
                )}
                {inputList.length - 1 === i && (
                  <Button onClick={handleAddClick}>Add</Button>
                )}
              </Box>
            </Box>
          </Box>
        );
      })}
      <Box sx={{ marginTop: "20px" }}>{JSON.stringify(inputList)}</Box>
      <Box sx={{ marginTop: "20px" }}>
        average Level = {findAverageLevels(inputList)}
      </Box>
    </Box>
  );
}

export default CharacterInput;
