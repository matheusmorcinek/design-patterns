import CoreFactory from '../core.js';
import { expect ,describe, test } from '@jest/globals';

function createMock() {

    function start() {

        console.log('[Mock] starting...');
    }

    function stop() {

        console.log('[Mock] stopping...');
    }

    return {
        start,
        stop
    }
}

describe('Core test suite', () => {

    test('should conten the method #start and #stop', () => {

        const databaseMock = createMock();
        const webserverMock = createMock();
    
        const core = CoreFactory.createCore({
            database: databaseMock,
            webserver: webserverMock
        });
    
        expect(core).toHaveProperty('start');
        expect(core).toHaveProperty('stop');
    });

    test('when started, should not throw erros', () => {

        const databaseMock = createMock();
        const webserverMock = createMock();
    
        const core = CoreFactory.createCore({
            database: databaseMock,
            webserver: webserverMock
        });
    
        expect(() => {

            core.start();
        }).not.toThrow();
    });

});

