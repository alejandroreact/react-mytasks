import React from 'react';
import PropTypes from 'prop-types';
import { Stack } from '@bubbles-ui/components';
import { Box, Title, Text } from '@bubbles-ui/components';

function Tasks(props) {

    return(
        <Stack direction="column" align="center" fullWidth spacing={0} >
            {Array.isArray(props.tasks) && props.tasks.map((task) => {
                return (
                    <Box key={task.taskName} style={{background:'#efef86', padding:10, marginBottom:'3px', textAlign:'left'}}>
                        <Title order={4} color="primary" >
                            {task.taskName}
                        </Title>
                        <Text size="md" color="secondary">
                            {task.taskDesc}
                        </Text>
                    </Box>
                )
            })}
        </Stack>
    )
}

Tasks.propTypes = {
    tasks: PropTypes.array
}

export default Tasks;
