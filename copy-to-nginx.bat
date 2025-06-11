@echo off

robocopy app1\dist nginx\var\apps\app1 /E /MIR
robocopy app2\dist nginx\var\apps\app2 /E /MIR
robocopy app3\dist nginx\var\apps\app3 /E /MIR

